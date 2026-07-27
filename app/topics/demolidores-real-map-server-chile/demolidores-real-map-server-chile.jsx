import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-real-map-server-chile');
}

export default function DemolidoresRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="demolidores-real-map-server-chile" />;
}
