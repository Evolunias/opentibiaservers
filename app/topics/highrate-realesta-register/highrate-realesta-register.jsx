import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-realesta-register');
}

export default function HighrateRealestaRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-realesta-register" />;
}
