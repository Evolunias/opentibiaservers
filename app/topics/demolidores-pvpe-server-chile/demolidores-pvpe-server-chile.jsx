import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-pvpe-server-chile');
}

export default function DemolidoresPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="demolidores-pvpe-server-chile" />;
}
