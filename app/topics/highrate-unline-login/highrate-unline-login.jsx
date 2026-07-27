import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-unline-login');
}

export default function HighrateUnlineLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-unline-login" />;
}
