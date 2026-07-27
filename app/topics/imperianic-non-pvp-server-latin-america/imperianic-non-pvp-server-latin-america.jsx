import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-non-pvp-server-latin-america');
}

export default function ImperianicNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-non-pvp-server-latin-america" />;
}
