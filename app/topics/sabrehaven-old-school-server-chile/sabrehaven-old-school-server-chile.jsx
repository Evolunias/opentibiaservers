import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-old-school-server-chile');
}

export default function SabrehavenOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-old-school-server-chile" />;
}
