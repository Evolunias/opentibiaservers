import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-13-fresh-start-server');
}

export default function Archlight13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-13-fresh-start-server" />;
}
