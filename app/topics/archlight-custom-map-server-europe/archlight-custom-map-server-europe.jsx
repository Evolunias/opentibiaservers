import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-custom-map-server-europe');
}

export default function ArchlightCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="archlight-custom-map-server-europe" />;
}
