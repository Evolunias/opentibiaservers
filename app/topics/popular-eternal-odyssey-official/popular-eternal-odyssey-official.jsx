import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-eternal-odyssey-official');
}

export default function PopularEternalOdysseyOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-eternal-odyssey-official" />;
}
