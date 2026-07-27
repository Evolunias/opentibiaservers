import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-old-school-register');
}

export default function Tibia12OldSchoolRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-old-school-register" />;
}
