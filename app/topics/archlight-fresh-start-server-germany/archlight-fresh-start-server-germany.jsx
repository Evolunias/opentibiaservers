import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-fresh-start-server-germany');
}

export default function ArchlightFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="archlight-fresh-start-server-germany" />;
}
