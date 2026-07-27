import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-7-4-evo-server');
}

export default function Archlight74EvoServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-7-4-evo-server" />;
}
