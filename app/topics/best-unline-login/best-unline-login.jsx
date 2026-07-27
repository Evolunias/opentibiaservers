import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-unline-login');
}

export default function BestUnlineLoginKeywordPage() {
  return <StaticKeywordPage slug="best-unline-login" />;
}
