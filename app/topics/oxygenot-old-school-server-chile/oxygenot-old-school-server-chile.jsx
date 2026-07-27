import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-old-school-server-chile');
}

export default function OxygenotOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-old-school-server-chile" />;
}
