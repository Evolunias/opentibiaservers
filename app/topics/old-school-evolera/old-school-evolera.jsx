import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-evolera');
}

export default function OldSchoolEvoleraKeywordPage() {
  return <StaticKeywordPage slug="old-school-evolera" />;
}
