import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-old-school-server-chile');
}

export default function RubinotOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="rubinot-old-school-server-chile" />;
}
