import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-real-map-servers-germany');
}

export default function ArchlightRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="archlight-real-map-servers-germany" />;
}
