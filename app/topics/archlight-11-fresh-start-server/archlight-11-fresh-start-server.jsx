import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-11-fresh-start-server');
}

export default function Archlight11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-11-fresh-start-server" />;
}
