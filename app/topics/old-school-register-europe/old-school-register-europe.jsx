import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-register-europe');
}

export default function OldSchoolRegisterEuropeKeywordPage() {
  return <StaticKeywordPage slug="old-school-register-europe" />;
}
