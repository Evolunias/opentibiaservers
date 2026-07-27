import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-baiak-server-chile');
}

export default function DemolidoresBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="demolidores-baiak-server-chile" />;
}
