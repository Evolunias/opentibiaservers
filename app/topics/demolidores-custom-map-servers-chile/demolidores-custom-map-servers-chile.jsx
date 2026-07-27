import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-custom-map-servers-chile');
}

export default function DemolidoresCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="demolidores-custom-map-servers-chile" />;
}
