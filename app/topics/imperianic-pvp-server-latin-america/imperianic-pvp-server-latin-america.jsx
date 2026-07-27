import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-pvp-server-latin-america');
}

export default function ImperianicPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-pvp-server-latin-america" />;
}
