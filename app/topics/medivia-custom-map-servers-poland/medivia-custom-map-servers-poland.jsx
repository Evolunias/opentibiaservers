import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-custom-map-servers-poland');
}

export default function MediviaCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="medivia-custom-map-servers-poland" />;
}
