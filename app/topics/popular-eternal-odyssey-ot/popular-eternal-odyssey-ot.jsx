import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-eternal-odyssey-ot');
}

export default function PopularEternalOdysseyOtKeywordPage() {
  return <StaticKeywordPage slug="popular-eternal-odyssey-ot" />;
}
