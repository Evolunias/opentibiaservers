import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-server-list-sweden');
}

export default function LowExpServerListSwedenKeywordPage() {
  return <StaticKeywordPage slug="low-exp-server-list-sweden" />;
}
