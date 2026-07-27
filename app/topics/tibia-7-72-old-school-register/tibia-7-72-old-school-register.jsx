import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-old-school-register');
}

export default function Tibia772OldSchoolRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-old-school-register" />;
}
