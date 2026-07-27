import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-oxygenot-login');
}

export default function OldSchoolOxygenotLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-oxygenot-login" />;
}
