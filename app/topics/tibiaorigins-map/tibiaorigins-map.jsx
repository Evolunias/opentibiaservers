import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-map');
}

export default function TibiaoriginsMapKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-map" />;
}
