import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-real-map-servers-uk');
}

export default function ArchlightRealMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="archlight-real-map-servers-uk" />;
}
