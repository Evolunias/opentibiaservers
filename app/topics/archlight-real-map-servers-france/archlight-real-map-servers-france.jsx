import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-real-map-servers-france');
}

export default function ArchlightRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="archlight-real-map-servers-france" />;
}
