import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-custom-map-servers-uk');
}

export default function TibiaoriginsCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-custom-map-servers-uk" />;
}
