import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-mist-of-death-register');
}

export default function HighrateMistOfDeathRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-mist-of-death-register" />;
}
