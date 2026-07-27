import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-unline-login');
}

export default function PopularUnlineLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-unline-login" />;
}
