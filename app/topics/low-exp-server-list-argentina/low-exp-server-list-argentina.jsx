import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-server-list-argentina');
}

export default function LowExpServerListArgentinaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-server-list-argentina" />;
}
