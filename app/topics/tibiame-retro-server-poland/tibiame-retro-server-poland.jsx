import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-retro-server-poland');
}

export default function TibiameRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiame-retro-server-poland" />;
}
