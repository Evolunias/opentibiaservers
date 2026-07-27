import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-blazera');
}

export default function OldSchoolBlazeraKeywordPage() {
  return <StaticKeywordPage slug="old-school-blazera" />;
}
