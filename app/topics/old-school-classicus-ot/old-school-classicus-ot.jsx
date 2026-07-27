import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-classicus-ot');
}

export default function OldSchoolClassicusOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-classicus-ot" />;
}
