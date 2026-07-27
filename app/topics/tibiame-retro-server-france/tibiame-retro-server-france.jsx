import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-retro-server-france');
}

export default function TibiameRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiame-retro-server-france" />;
}
