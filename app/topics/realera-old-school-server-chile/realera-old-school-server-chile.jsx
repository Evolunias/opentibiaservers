import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-old-school-server-chile');
}

export default function RealeraOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="realera-old-school-server-chile" />;
}
