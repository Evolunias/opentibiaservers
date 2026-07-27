import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-kasteria-servers');
}

export default function EvoKasteriaServersKeywordPage() {
  return <StaticKeywordPage slug="evo-kasteria-servers" />;
}
