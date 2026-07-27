import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-miracle');
}

export default function OldSchoolMiracleKeywordPage() {
  return <StaticKeywordPage slug="old-school-miracle" />;
}
