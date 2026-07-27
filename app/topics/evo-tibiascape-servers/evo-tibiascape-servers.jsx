import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-tibiascape-servers');
}

export default function EvoTibiascapeServersKeywordPage() {
  return <StaticKeywordPage slug="evo-tibiascape-servers" />;
}
