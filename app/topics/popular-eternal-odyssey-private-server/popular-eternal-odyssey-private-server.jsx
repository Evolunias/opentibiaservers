import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-eternal-odyssey-private-server');
}

export default function PopularEternalOdysseyPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-eternal-odyssey-private-server" />;
}
