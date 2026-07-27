import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-old-school-server-chile');
}

export default function NtoStarOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="nto-star-old-school-server-chile" />;
}
