import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-retro-server-chile');
}

export default function OxygenotRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-retro-server-chile" />;
}
