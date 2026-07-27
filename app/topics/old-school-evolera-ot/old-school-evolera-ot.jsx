import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-evolera-ot');
}

export default function OldSchoolEvoleraOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-evolera-ot" />;
}
