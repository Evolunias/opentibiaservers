import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-real-map-server-brazil');
}

export default function TibiaoriginsRealMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-real-map-server-brazil" />;
}
