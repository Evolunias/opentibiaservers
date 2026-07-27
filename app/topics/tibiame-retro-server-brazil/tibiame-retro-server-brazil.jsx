import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-retro-server-brazil');
}

export default function TibiameRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiame-retro-server-brazil" />;
}
