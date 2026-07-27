import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-old-school-server-chile');
}

export default function InfernalOtOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-old-school-server-chile" />;
}
