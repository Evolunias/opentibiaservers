import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-4-evo-server');
}

export default function Archlight84EvoServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-4-evo-server" />;
}
