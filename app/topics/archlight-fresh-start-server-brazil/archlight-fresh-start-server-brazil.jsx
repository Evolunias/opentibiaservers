import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-fresh-start-server-brazil');
}

export default function ArchlightFreshStartServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="archlight-fresh-start-server-brazil" />;
}
