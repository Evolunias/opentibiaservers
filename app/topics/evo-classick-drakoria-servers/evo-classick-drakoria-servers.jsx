import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-classick-drakoria-servers');
}

export default function EvoClassickDrakoriaServersKeywordPage() {
  return <StaticKeywordPage slug="evo-classick-drakoria-servers" />;
}
