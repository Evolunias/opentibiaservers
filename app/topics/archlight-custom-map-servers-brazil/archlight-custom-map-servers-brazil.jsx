import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-custom-map-servers-brazil');
}

export default function ArchlightCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="archlight-custom-map-servers-brazil" />;
}
