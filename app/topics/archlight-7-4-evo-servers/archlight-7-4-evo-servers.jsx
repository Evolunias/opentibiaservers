import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-7-4-evo-servers');
}

export default function Archlight74EvoServersKeywordPage() {
  return <StaticKeywordPage slug="archlight-7-4-evo-servers" />;
}
