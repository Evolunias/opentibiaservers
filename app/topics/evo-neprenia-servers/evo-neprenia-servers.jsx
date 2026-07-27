import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-neprenia-servers');
}

export default function EvoNepreniaServersKeywordPage() {
  return <StaticKeywordPage slug="evo-neprenia-servers" />;
}
