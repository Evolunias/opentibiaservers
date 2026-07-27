import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-retro-server-canada');
}

export default function TibiameRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-retro-server-canada" />;
}
