import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-custom-map-server-poland');
}

export default function DemolidoresCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="demolidores-custom-map-server-poland" />;
}
