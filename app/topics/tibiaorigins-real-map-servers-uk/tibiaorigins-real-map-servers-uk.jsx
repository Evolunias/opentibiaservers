import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-real-map-servers-uk');
}

export default function TibiaoriginsRealMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-real-map-servers-uk" />;
}
