import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-custom-map-servers-germany');
}

export default function TibiaoriginsCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-custom-map-servers-germany" />;
}
