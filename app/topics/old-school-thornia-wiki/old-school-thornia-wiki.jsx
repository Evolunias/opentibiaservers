import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-thornia-wiki');
}

export default function OldSchoolThorniaWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-thornia-wiki" />;
}
