import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-register-south-america');
}

export default function OldSchoolRegisterSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="old-school-register-south-america" />;
}
