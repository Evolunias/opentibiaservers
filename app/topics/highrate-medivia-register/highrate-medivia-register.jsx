import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-medivia-register');
}

export default function HighrateMediviaRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-medivia-register" />;
}
