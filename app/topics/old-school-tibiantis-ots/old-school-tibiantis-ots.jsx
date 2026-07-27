import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiantis-ots');
}

export default function OldSchoolTibiantisOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiantis-ots" />;
}
