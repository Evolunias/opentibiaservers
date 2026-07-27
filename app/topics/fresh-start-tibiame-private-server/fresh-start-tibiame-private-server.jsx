import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiame-private-server');
}

export default function FreshStartTibiamePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiame-private-server" />;
}
