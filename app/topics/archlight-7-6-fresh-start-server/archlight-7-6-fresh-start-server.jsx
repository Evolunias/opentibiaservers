import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-7-6-fresh-start-server');
}

export default function Archlight76FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-7-6-fresh-start-server" />;
}
