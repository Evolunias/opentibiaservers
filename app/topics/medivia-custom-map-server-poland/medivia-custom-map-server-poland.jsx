import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-custom-map-server-poland');
}

export default function MediviaCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="medivia-custom-map-server-poland" />;
}
