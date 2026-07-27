import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-low-exp-server-chile');
}

export default function DemolidoresLowExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="demolidores-low-exp-server-chile" />;
}
