import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-unline-register');
}

export default function TopUnlineRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-unline-register" />;
}
