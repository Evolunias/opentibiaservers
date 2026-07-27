import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-real-map-servers-chile');
}

export default function DemolidoresRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="demolidores-real-map-servers-chile" />;
}
