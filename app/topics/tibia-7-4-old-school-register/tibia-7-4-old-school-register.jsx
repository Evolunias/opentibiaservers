import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-old-school-register');
}

export default function Tibia74OldSchoolRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-old-school-register" />;
}
