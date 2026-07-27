import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-custom-map-server-poland');
}

export default function RealeraCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="realera-custom-map-server-poland" />;
}
