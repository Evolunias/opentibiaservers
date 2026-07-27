import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-real-map');
}

export default function NepreniaRealMapKeywordPage() {
  return <StaticKeywordPage slug="neprenia-real-map" />;
}
