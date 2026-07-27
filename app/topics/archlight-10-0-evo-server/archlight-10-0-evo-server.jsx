import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-10-0-evo-server');
}

export default function Archlight100EvoServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-10-0-evo-server" />;
}
