import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-madnessalive-login');
}

export default function HighrateMadnessaliveLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-madnessalive-login" />;
}
