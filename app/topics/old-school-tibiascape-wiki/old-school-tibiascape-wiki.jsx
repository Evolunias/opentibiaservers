import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiascape-wiki');
}

export default function OldSchoolTibiascapeWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiascape-wiki" />;
}
