import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-retro-server-chile');
}

export default function NilotRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="nilot-retro-server-chile" />;
}
