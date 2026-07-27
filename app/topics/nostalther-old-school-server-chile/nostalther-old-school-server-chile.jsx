import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-old-school-server-chile');
}

export default function NostaltherOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="nostalther-old-school-server-chile" />;
}
