import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-archlight-servers');
}

export default function EvoArchlightServersKeywordPage() {
  return <StaticKeywordPage slug="evo-archlight-servers" />;
}
