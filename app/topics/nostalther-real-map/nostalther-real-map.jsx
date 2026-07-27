import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-real-map');
}

export default function NostaltherRealMapKeywordPage() {
  return <StaticKeywordPage slug="nostalther-real-map" />;
}
