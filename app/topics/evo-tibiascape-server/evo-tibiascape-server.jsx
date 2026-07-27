import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-tibiascape-server');
}

export default function EvoTibiascapeServerKeywordPage() {
  return <StaticKeywordPage slug="evo-tibiascape-server" />;
}
