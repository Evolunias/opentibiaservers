import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-unline-register');
}

export default function LowrateUnlineRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-unline-register" />;
}
