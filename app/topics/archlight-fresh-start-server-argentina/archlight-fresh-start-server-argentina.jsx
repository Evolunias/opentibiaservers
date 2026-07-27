import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-fresh-start-server-argentina');
}

export default function ArchlightFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="archlight-fresh-start-server-argentina" />;
}
