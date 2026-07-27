import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-high-exp-server-europe');
}

export default function TibiaraHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiara-high-exp-server-europe" />;
}
