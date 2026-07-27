import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-7-1-fresh-start-server');
}

export default function Archlight71FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-7-1-fresh-start-server" />;
}
