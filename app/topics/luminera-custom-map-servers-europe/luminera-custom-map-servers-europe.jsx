import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-custom-map-servers-europe');
}

export default function LumineraCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="luminera-custom-map-servers-europe" />;
}
