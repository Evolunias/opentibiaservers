import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-yurots-login');
}

export default function OldSchoolYurotsLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-yurots-login" />;
}
