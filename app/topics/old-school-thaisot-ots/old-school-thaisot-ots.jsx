import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-thaisot-ots');
}

export default function OldSchoolThaisotOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-thaisot-ots" />;
}
