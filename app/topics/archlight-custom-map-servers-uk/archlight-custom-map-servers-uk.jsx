import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-custom-map-servers-uk');
}

export default function ArchlightCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="archlight-custom-map-servers-uk" />;
}
