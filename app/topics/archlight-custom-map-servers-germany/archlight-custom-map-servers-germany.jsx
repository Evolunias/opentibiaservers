import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-custom-map-servers-germany');
}

export default function ArchlightCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="archlight-custom-map-servers-germany" />;
}
