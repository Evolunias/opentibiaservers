import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-map');
}

export default function BlazeraMapKeywordPage() {
  return <StaticKeywordPage slug="blazera-map" />;
}
