import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-retro-server-chile');
}

export default function ThorniaRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="thornia-retro-server-chile" />;
}
