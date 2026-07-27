import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-6-evo-servers');
}

export default function Archlight86EvoServersKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-6-evo-servers" />;
}
