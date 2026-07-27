import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-15-evo-server');
}

export default function Archlight15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-15-evo-server" />;
}
