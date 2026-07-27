import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-pvp-server-mexico');
}

export default function ImperianicPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="imperianic-pvp-server-mexico" />;
}
