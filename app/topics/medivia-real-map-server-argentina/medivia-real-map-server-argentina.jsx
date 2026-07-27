import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-real-map-server-argentina');
}

export default function MediviaRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="medivia-real-map-server-argentina" />;
}
