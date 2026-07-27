import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-9-6-fresh-start-server');
}

export default function Archlight96FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-9-6-fresh-start-server" />;
}
