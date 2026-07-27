import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-real-map-servers-poland');
}

export default function MediviaRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="medivia-real-map-servers-poland" />;
}
