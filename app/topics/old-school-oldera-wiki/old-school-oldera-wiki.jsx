import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-oldera-wiki');
}

export default function OldSchoolOlderaWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-oldera-wiki" />;
}
