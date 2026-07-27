import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nilot-ot');
}

export default function OldSchoolNilotOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-nilot-ot" />;
}
