import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-map');
}

export default function DemolidoresMapKeywordPage() {
  return <StaticKeywordPage slug="demolidores-map" />;
}
