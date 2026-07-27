import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-eternal-odyssey-website');
}

export default function PopularEternalOdysseyWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-eternal-odyssey-website" />;
}
