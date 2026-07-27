import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-yurots-register');
}

export default function OldSchoolYurotsRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-yurots-register" />;
}
