import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-6-fresh-start-server');
}

export default function Archlight86FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-6-fresh-start-server" />;
}
