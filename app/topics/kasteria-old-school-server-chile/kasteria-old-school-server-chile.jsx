import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-old-school-server-chile');
}

export default function KasteriaOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="kasteria-old-school-server-chile" />;
}
