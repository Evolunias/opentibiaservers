import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-map');
}

export default function ArchlightMapKeywordPage() {
  return <StaticKeywordPage slug="archlight-map" />;
}
