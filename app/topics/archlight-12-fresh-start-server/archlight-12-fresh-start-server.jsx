import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-12-fresh-start-server');
}

export default function Archlight12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-12-fresh-start-server" />;
}
