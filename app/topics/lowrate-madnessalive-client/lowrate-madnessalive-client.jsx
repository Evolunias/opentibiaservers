import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-madnessalive-client');
}

export default function LowrateMadnessaliveClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-madnessalive-client" />;
}
