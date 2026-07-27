import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-unline-login');
}

export default function LowrateUnlineLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-unline-login" />;
}
