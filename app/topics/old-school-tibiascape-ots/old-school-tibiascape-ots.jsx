import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiascape-ots');
}

export default function OldSchoolTibiascapeOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiascape-ots" />;
}
