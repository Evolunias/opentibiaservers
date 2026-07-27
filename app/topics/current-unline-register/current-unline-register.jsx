import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-unline-register');
}

export default function CurrentUnlineRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-unline-register" />;
}
