import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-server-list-germany');
}

export default function LowExpServerListGermanyKeywordPage() {
  return <StaticKeywordPage slug="low-exp-server-list-germany" />;
}
