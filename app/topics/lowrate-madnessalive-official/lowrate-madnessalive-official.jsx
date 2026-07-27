import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-madnessalive-official');
}

export default function LowrateMadnessaliveOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-madnessalive-official" />;
}
