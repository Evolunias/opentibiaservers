import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-old-school-register');
}

export default function Tibia84OldSchoolRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-old-school-register" />;
}
