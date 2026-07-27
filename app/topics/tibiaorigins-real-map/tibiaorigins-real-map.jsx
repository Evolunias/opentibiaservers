import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-real-map');
}

export default function TibiaoriginsRealMapKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-real-map" />;
}
