import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-classick-drakoria-register');
}

export default function OldSchoolClassickDrakoriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-classick-drakoria-register" />;
}
