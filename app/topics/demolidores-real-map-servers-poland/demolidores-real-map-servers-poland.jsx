import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-real-map-servers-poland');
}

export default function DemolidoresRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="demolidores-real-map-servers-poland" />;
}
