import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-12-evo-server');
}

export default function Archlight12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-12-evo-server" />;
}
