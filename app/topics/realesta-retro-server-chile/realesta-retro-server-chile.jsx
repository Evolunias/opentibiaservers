import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-retro-server-chile');
}

export default function RealestaRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="realesta-retro-server-chile" />;
}
