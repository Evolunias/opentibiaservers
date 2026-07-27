import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-9-6-evo-servers');
}

export default function Archlight96EvoServersKeywordPage() {
  return <StaticKeywordPage slug="archlight-9-6-evo-servers" />;
}
