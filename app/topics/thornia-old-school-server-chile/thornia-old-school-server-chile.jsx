import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-old-school-server-chile');
}

export default function ThorniaOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="thornia-old-school-server-chile" />;
}
