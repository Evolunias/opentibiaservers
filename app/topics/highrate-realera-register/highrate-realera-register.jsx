import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-realera-register');
}

export default function HighrateRealeraRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-realera-register" />;
}
