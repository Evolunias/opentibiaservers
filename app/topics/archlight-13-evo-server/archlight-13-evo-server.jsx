import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-13-evo-server');
}

export default function Archlight13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-13-evo-server" />;
}
