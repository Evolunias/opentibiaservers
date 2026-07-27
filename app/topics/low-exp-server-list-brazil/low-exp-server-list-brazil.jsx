import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-server-list-brazil');
}

export default function LowExpServerListBrazilKeywordPage() {
  return <StaticKeywordPage slug="low-exp-server-list-brazil" />;
}
