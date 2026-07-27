import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-real-map-server-germany');
}

export default function ArchlightRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="archlight-real-map-server-germany" />;
}
