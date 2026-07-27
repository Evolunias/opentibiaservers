import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-non-pvp-server-north-america');
}

export default function ImperianicNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-non-pvp-server-north-america" />;
}
