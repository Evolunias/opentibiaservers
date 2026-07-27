import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-0-evo-servers');
}

export default function Archlight80EvoServersKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-0-evo-servers" />;
}
