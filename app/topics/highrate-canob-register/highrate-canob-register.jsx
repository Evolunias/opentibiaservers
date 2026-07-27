import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-canob-register');
}

export default function HighrateCanobRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-canob-register" />;
}
