import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-eternal-odyssey-ots');
}

export default function PopularEternalOdysseyOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-eternal-odyssey-ots" />;
}
