import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-11-evo-servers');
}

export default function Archlight11EvoServersKeywordPage() {
  return <StaticKeywordPage slug="archlight-11-evo-servers" />;
}
