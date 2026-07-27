import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-high-exp-server-brazil');
}

export default function TibiaraHighExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiara-high-exp-server-brazil" />;
}
