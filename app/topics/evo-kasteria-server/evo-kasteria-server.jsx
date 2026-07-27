import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-kasteria-server');
}

export default function EvoKasteriaServerKeywordPage() {
  return <StaticKeywordPage slug="evo-kasteria-server" />;
}
