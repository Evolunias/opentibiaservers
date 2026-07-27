import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-4-fresh-start-server');
}

export default function Archlight84FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-4-fresh-start-server" />;
}
