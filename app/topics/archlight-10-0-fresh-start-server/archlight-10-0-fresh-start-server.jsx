import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-10-0-fresh-start-server');
}

export default function Archlight100FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-10-0-fresh-start-server" />;
}
