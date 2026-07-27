import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-custom-map-server-europe');
}

export default function RealeraCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="realera-custom-map-server-europe" />;
}
