import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-custom-map-servers-poland');
}

export default function ArchlightCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="archlight-custom-map-servers-poland" />;
}
