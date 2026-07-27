import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-old-school-register');
}

export default function Tibia14OldSchoolRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-old-school-register" />;
}
