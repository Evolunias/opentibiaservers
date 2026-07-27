import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-realera-wiki');
}

export default function OldSchoolRealeraWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-realera-wiki" />;
}
