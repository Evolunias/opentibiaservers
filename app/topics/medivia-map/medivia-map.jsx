import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-map');
}

export default function MediviaMapKeywordPage() {
  return <StaticKeywordPage slug="medivia-map" />;
}
