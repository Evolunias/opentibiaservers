import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiascape');
}

export default function OldSchoolTibiascapeKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiascape" />;
}
