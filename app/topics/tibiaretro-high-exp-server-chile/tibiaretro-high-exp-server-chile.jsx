import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-high-exp-server-chile');
}

export default function TibiaretroHighExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-high-exp-server-chile" />;
}
