import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-madnessalive-register');
}

export default function HighrateMadnessaliveRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-madnessalive-register" />;
}
