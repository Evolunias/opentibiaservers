import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-retro-server-germany');
}

export default function TibiameRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiame-retro-server-germany" />;
}
