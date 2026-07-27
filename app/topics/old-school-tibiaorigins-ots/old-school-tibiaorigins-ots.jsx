import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiaorigins-ots');
}

export default function OldSchoolTibiaoriginsOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiaorigins-ots" />;
}
