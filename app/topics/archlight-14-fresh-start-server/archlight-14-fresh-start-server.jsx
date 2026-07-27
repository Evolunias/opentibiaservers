import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-14-fresh-start-server');
}

export default function Archlight14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-14-fresh-start-server" />;
}
