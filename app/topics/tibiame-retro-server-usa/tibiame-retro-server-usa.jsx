import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-retro-server-usa');
}

export default function TibiameRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-retro-server-usa" />;
}
