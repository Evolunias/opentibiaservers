import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-old-school-register');
}

export default function Tibia854OldSchoolRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-old-school-register" />;
}
