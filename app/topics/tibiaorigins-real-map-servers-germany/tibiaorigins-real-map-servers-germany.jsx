import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-real-map-servers-germany');
}

export default function TibiaoriginsRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-real-map-servers-germany" />;
}
