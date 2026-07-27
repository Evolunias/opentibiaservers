import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-madnessalive-official');
}

export default function PopularMadnessaliveOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-madnessalive-official" />;
}
