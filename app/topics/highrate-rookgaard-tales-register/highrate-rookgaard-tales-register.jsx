import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-rookgaard-tales-register');
}

export default function HighrateRookgaardTalesRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-rookgaard-tales-register" />;
}
