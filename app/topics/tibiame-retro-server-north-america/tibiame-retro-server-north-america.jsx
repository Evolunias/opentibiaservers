import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-retro-server-north-america');
}

export default function TibiameRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-retro-server-north-america" />;
}
