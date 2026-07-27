import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-1-evo-server');
}

export default function Archlight81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-1-evo-server" />;
}
