import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-blazera-ot');
}

export default function OldSchoolBlazeraOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-blazera-ot" />;
}
