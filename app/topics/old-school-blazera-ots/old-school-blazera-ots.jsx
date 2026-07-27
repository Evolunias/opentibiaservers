import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-blazera-ots');
}

export default function OldSchoolBlazeraOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-blazera-ots" />;
}
