import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-germany-server');
}

export default function TibiameGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-germany-server" />;
}
