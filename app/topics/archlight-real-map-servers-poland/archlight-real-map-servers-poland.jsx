import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-real-map-servers-poland');
}

export default function ArchlightRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="archlight-real-map-servers-poland" />;
}
