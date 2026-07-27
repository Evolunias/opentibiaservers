import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-madnessalive-website');
}

export default function PopularMadnessaliveWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-madnessalive-website" />;
}
