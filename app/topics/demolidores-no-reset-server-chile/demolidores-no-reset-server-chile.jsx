import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-no-reset-server-chile');
}

export default function DemolidoresNoResetServerChileKeywordPage() {
  return <StaticKeywordPage slug="demolidores-no-reset-server-chile" />;
}
