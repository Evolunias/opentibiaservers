import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-7-1-evo-servers');
}

export default function Archlight71EvoServersKeywordPage() {
  return <StaticKeywordPage slug="archlight-7-1-evo-servers" />;
}
