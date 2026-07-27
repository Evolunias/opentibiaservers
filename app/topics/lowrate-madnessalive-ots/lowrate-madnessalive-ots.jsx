import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-madnessalive-ots');
}

export default function LowrateMadnessaliveOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-madnessalive-ots" />;
}
