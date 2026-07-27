import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-real-map-server-germany');
}

export default function MediviaRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="medivia-real-map-server-germany" />;
}
