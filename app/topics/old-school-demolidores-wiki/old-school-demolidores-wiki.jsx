import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-demolidores-wiki');
}

export default function OldSchoolDemolidoresWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-demolidores-wiki" />;
}
