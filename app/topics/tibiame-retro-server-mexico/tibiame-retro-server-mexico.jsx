import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-retro-server-mexico');
}

export default function TibiameRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiame-retro-server-mexico" />;
}
