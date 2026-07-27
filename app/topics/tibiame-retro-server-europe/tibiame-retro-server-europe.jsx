import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-retro-server-europe');
}

export default function TibiameRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiame-retro-server-europe" />;
}
