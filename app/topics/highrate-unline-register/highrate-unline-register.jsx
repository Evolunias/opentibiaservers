import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-unline-register');
}

export default function HighrateUnlineRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-unline-register" />;
}
