import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nilot-ots');
}

export default function OldSchoolNilotOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-nilot-ots" />;
}
