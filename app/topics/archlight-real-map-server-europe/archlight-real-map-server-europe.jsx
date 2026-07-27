import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-real-map-server-europe');
}

export default function ArchlightRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="archlight-real-map-server-europe" />;
}
