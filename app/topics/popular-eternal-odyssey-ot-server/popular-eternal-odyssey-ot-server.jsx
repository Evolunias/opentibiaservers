import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-eternal-odyssey-ot-server');
}

export default function PopularEternalOdysseyOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-eternal-odyssey-ot-server" />;
}
