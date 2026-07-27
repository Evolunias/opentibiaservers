import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-miracle-ots');
}

export default function OldSchoolMiracleOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-miracle-ots" />;
}
