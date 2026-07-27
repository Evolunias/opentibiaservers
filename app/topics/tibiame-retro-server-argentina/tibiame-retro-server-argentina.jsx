import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-retro-server-argentina');
}

export default function TibiameRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-retro-server-argentina" />;
}
