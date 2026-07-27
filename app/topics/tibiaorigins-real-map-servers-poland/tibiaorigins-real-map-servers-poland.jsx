import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-real-map-servers-poland');
}

export default function TibiaoriginsRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-real-map-servers-poland" />;
}
