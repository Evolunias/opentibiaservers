import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-9-6-evo-server');
}

export default function Archlight96EvoServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-9-6-evo-server" />;
}
