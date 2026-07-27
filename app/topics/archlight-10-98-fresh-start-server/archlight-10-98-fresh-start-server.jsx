import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-10-98-fresh-start-server');
}

export default function Archlight1098FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-10-98-fresh-start-server" />;
}
