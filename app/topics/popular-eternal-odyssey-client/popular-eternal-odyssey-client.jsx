import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-eternal-odyssey-client');
}

export default function PopularEternalOdysseyClientKeywordPage() {
  return <StaticKeywordPage slug="popular-eternal-odyssey-client" />;
}
