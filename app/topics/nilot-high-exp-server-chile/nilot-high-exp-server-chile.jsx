import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-high-exp-server-chile');
}

export default function NilotHighExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="nilot-high-exp-server-chile" />;
}
