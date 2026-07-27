import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-shadowcores-wiki');
}

export default function OldSchoolShadowcoresWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-shadowcores-wiki" />;
}
