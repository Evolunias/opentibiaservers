import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-old-school-server-chile');
}

export default function TibiaretroOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-old-school-server-chile" />;
}
