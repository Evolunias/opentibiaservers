import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-unline-register');
}

export default function PopularUnlineRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-unline-register" />;
}
