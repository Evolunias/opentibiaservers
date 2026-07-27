import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-custom-map-servers-poland');
}

export default function DemolidoresCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="demolidores-custom-map-servers-poland" />;
}
