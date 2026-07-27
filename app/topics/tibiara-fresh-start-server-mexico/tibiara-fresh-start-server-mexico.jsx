import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-fresh-start-server-mexico');
}

export default function TibiaraFreshStartServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiara-fresh-start-server-mexico" />;
}
