import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-real-map-server-uk');
}

export default function ArchlightRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="archlight-real-map-server-uk" />;
}
