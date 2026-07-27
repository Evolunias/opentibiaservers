import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-tibiame-servers');
}

export default function EvoTibiameServersKeywordPage() {
  return <StaticKeywordPage slug="evo-tibiame-servers" />;
}
