import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-old-school-server-chile');
}

export default function LumineraOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="luminera-old-school-server-chile" />;
}
