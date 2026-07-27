import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-retro-server-chile');
}

export default function UnlineRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="unline-retro-server-chile" />;
}
