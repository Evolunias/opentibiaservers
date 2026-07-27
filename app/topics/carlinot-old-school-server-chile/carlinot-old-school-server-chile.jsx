import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-old-school-server-chile');
}

export default function CarlinotOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="carlinot-old-school-server-chile" />;
}
