import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-madnessalive-ot');
}

export default function LowrateMadnessaliveOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-madnessalive-ot" />;
}
