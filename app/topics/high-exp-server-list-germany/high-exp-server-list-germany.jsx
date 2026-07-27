import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-server-list-germany');
}

export default function HighExpServerListGermanyKeywordPage() {
  return <StaticKeywordPage slug="high-exp-server-list-germany" />;
}
