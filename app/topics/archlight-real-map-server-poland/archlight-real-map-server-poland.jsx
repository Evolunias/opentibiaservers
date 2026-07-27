import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-real-map-server-poland');
}

export default function ArchlightRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="archlight-real-map-server-poland" />;
}
