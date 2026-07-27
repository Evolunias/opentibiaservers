import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-15-evo-servers');
}

export default function Archlight15EvoServersKeywordPage() {
  return <StaticKeywordPage slug="archlight-15-evo-servers" />;
}
