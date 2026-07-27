import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-real-map');
}

export default function ArchlightRealMapKeywordPage() {
  return <StaticKeywordPage slug="archlight-real-map" />;
}
