import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-madnessalive-official');
}

export default function TopMadnessaliveOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-madnessalive-official" />;
}
