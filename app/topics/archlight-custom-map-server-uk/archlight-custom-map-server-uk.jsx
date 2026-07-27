import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-custom-map-server-uk');
}

export default function ArchlightCustomMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="archlight-custom-map-server-uk" />;
}
