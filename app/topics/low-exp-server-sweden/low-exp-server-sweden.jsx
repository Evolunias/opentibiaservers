import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-server-sweden');
}

export default function LowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="low-exp-server-sweden" />;
}
