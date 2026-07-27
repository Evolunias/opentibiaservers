import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-custom-map-server-poland');
}

export default function ArchlightCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="archlight-custom-map-server-poland" />;
}
