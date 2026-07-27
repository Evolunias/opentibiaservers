import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-6-evo-server');
}

export default function Archlight86EvoServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-6-evo-server" />;
}
