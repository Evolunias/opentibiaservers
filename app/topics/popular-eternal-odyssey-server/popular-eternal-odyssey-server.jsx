import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-eternal-odyssey-server');
}

export default function PopularEternalOdysseyServerKeywordPage() {
  return <StaticKeywordPage slug="popular-eternal-odyssey-server" />;
}
