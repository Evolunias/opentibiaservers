import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-custom-map-servers-uk');
}

export default function RealeraCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="realera-custom-map-servers-uk" />;
}
