import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-7-72-evo-server');
}

export default function Archlight772EvoServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-7-72-evo-server" />;
}
