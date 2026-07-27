import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-11-evo-server');
}

export default function Archlight11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-11-evo-server" />;
}
