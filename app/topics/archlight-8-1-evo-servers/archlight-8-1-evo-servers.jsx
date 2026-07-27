import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-1-evo-servers');
}

export default function Archlight81EvoServersKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-1-evo-servers" />;
}
