import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nto-star-register');
}

export default function OldSchoolNtoStarRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-nto-star-register" />;
}
