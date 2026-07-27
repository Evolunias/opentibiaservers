import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-neprenia-server');
}

export default function EvoNepreniaServerKeywordPage() {
  return <StaticKeywordPage slug="evo-neprenia-server" />;
}
