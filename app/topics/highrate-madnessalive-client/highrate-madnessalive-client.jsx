import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-madnessalive-client');
}

export default function HighrateMadnessaliveClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-madnessalive-client" />;
}
