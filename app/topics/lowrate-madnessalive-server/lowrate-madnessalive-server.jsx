import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-madnessalive-server');
}

export default function LowrateMadnessaliveServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-madnessalive-server" />;
}
