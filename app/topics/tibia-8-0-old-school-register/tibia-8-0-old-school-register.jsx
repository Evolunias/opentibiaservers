import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-old-school-register');
}

export default function Tibia80OldSchoolRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-old-school-register" />;
}
