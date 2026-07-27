import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-thaisot-register');
}

export default function HighrateThaisotRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-thaisot-register" />;
}
