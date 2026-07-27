import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-custom-map-server-europe');
}

export default function LumineraCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="luminera-custom-map-server-europe" />;
}
