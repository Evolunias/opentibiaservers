import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-chile-server');
}

export default function TibiameChileServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-chile-server" />;
}
