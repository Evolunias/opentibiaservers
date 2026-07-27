import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-old-school-register');
}

export default function Tibia100OldSchoolRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-old-school-register" />;
}
