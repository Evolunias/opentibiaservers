import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-old-school-server-chile');
}

export default function AlasteraOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="alastera-old-school-server-chile" />;
}
