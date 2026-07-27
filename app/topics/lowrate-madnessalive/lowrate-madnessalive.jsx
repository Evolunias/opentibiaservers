import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-madnessalive');
}

export default function LowrateMadnessaliveKeywordPage() {
  return <StaticKeywordPage slug="lowrate-madnessalive" />;
}
