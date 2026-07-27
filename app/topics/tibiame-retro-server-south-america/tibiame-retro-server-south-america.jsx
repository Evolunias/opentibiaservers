import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-retro-server-south-america');
}

export default function TibiameRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-retro-server-south-america" />;
}
