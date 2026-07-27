import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-old-school-register');
}

export default function Tibia11OldSchoolRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-old-school-register" />;
}
