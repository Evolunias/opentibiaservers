import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-non-pvp-server-mexico');
}

export default function ImperianicNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="imperianic-non-pvp-server-mexico" />;
}
