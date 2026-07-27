import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-miracle-login');
}

export default function OldSchoolMiracleLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-miracle-login" />;
}
