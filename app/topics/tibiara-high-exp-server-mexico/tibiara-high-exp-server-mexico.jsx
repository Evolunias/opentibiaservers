import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-high-exp-server-mexico');
}

export default function TibiaraHighExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiara-high-exp-server-mexico" />;
}
