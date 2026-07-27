import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-servers-uk');
}

export default function CustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="custom-map-servers-uk" />;
}
