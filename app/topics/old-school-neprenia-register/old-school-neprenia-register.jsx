import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-neprenia-register');
}

export default function OldSchoolNepreniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-neprenia-register" />;
}
