import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-server-list-europe');
}

export default function LowExpServerListEuropeKeywordPage() {
  return <StaticKeywordPage slug="low-exp-server-list-europe" />;
}
