import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-originaltibia-login');
}

export default function OldSchoolOriginaltibiaLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-originaltibia-login" />;
}
