import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-7-1-evo-server');
}

export default function Archlight71EvoServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-7-1-evo-server" />;
}
