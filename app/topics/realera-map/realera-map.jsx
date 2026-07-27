import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-map');
}

export default function RealeraMapKeywordPage() {
  return <StaticKeywordPage slug="realera-map" />;
}
