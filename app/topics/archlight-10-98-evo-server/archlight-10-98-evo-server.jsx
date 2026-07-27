import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-10-98-evo-server');
}

export default function Archlight1098EvoServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-10-98-evo-server" />;
}
