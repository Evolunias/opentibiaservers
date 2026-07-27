import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiame-wiki');
}

export default function OldSchoolTibiameWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiame-wiki" />;
}
