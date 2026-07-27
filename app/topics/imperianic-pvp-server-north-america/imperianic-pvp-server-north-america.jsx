import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-pvp-server-north-america');
}

export default function ImperianicPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-pvp-server-north-america" />;
}
