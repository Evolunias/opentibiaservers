import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiascape-private-server');
}

export default function PopularTibiascapePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiascape-private-server" />;
}
