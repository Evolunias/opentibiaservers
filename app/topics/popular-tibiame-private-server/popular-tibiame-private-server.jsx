import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiame-private-server');
}

export default function PopularTibiamePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiame-private-server" />;
}
