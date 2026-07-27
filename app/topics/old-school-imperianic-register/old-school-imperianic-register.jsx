import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-imperianic-register');
}

export default function OldSchoolImperianicRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-imperianic-register" />;
}
