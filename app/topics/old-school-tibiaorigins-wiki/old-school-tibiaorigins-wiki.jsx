import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiaorigins-wiki');
}

export default function OldSchoolTibiaoriginsWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiaorigins-wiki" />;
}
