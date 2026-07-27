import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-old-school-server-chile');
}

export default function TibiantisOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-old-school-server-chile" />;
}
