import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-fun-server');
}

export default function TibiameFunServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-fun-server" />;
}
