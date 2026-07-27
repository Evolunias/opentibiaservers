import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-server-list-sweden');
}

export default function HighExpServerListSwedenKeywordPage() {
  return <StaticKeywordPage slug="high-exp-server-list-sweden" />;
}
