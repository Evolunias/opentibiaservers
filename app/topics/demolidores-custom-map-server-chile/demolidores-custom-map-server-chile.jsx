import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-custom-map-server-chile');
}

export default function DemolidoresCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="demolidores-custom-map-server-chile" />;
}
