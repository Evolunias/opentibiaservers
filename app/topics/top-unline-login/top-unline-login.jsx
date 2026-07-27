import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-unline-login');
}

export default function TopUnlineLoginKeywordPage() {
  return <StaticKeywordPage slug="top-unline-login" />;
}
