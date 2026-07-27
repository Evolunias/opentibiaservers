import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-old-school-server-chile');
}

export default function NoxiousotOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-old-school-server-chile" />;
}
