import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-server-list-europe');
}

export default function HighExpServerListEuropeKeywordPage() {
  return <StaticKeywordPage slug="high-exp-server-list-europe" />;
}
