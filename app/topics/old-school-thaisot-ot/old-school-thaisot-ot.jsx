import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-thaisot-ot');
}

export default function OldSchoolThaisotOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-thaisot-ot" />;
}
