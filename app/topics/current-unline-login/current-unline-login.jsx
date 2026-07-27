import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-unline-login');
}

export default function CurrentUnlineLoginKeywordPage() {
  return <StaticKeywordPage slug="current-unline-login" />;
}
