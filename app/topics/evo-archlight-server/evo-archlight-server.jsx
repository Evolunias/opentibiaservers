import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-archlight-server');
}

export default function EvoArchlightServerKeywordPage() {
  return <StaticKeywordPage slug="evo-archlight-server" />;
}
