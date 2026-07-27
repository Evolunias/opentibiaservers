import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-1-fresh-start-server');
}

export default function Archlight81FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-1-fresh-start-server" />;
}
