import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-14-evo-server');
}

export default function Archlight14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-14-evo-server" />;
}
