import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-real-map-servers-argentina');
}

export default function MediviaRealMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="medivia-real-map-servers-argentina" />;
}
