import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-rubinot-login');
}

export default function OldSchoolRubinotLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-rubinot-login" />;
}
