import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-evolera-ots');
}

export default function OldSchoolEvoleraOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-evolera-ots" />;
}
