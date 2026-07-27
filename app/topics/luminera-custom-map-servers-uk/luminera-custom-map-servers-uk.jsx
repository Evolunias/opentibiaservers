import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-custom-map-servers-uk');
}

export default function LumineraCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="luminera-custom-map-servers-uk" />;
}
