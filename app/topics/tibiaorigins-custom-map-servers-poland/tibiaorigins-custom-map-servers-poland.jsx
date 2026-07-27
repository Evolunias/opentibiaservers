import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-custom-map-servers-poland');
}

export default function TibiaoriginsCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-custom-map-servers-poland" />;
}
