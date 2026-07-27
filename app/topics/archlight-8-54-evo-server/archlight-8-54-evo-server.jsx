import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-54-evo-server');
}

export default function Archlight854EvoServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-54-evo-server" />;
}
