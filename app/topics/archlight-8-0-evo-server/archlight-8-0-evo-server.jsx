import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-0-evo-server');
}

export default function Archlight80EvoServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-0-evo-server" />;
}
