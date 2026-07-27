import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-real-map-servers-brazil');
}

export default function ArchlightRealMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="archlight-real-map-servers-brazil" />;
}
