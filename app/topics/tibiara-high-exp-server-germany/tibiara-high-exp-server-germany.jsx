import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-high-exp-server-germany');
}

export default function TibiaraHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiara-high-exp-server-germany" />;
}
