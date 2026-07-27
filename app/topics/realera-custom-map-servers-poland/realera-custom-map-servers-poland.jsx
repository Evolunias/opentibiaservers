import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-custom-map-servers-poland');
}

export default function RealeraCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="realera-custom-map-servers-poland" />;
}
