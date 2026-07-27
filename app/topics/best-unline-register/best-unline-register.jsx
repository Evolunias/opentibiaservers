import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-unline-register');
}

export default function BestUnlineRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-unline-register" />;
}
