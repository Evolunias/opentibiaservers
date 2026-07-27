import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-real-map-servers-brazil');
}

export default function TibiaoriginsRealMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-real-map-servers-brazil" />;
}
