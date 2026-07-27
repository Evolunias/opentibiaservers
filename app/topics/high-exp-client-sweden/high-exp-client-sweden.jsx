import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-client-sweden');
}

export default function HighExpClientSwedenKeywordPage() {
  return <StaticKeywordPage slug="high-exp-client-sweden" />;
}
