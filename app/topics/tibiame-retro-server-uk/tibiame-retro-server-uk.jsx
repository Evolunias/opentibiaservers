import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-retro-server-uk');
}

export default function TibiameRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiame-retro-server-uk" />;
}
