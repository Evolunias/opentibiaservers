import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiantis-ot');
}

export default function OldSchoolTibiantisOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiantis-ot" />;
}
