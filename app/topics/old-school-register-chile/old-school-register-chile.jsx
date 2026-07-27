import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-register-chile');
}

export default function OldSchoolRegisterChileKeywordPage() {
  return <StaticKeywordPage slug="old-school-register-chile" />;
}
