import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-old-school-server-chile');
}

export default function ArcaniarlOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-old-school-server-chile" />;
}
