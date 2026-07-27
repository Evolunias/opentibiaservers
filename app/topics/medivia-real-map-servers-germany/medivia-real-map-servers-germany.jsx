import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-real-map-servers-germany');
}

export default function MediviaRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="medivia-real-map-servers-germany" />;
}
