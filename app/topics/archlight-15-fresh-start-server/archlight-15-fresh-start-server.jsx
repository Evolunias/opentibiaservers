import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-15-fresh-start-server');
}

export default function Archlight15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-15-fresh-start-server" />;
}
