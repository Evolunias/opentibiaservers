import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-client-sweden');
}

export default function LowExpClientSwedenKeywordPage() {
  return <StaticKeywordPage slug="low-exp-client-sweden" />;
}
