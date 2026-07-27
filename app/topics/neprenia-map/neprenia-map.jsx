import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-map');
}

export default function NepreniaMapKeywordPage() {
  return <StaticKeywordPage slug="neprenia-map" />;
}
