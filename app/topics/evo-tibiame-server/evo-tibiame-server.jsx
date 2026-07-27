import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-tibiame-server');
}

export default function EvoTibiameServerKeywordPage() {
  return <StaticKeywordPage slug="evo-tibiame-server" />;
}
