import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-arcaniarl-register');
}

export default function OldSchoolArcaniarlRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-arcaniarl-register" />;
}
