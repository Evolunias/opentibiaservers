import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-imperianic-wiki');
}

export default function OldSchoolImperianicWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-imperianic-wiki" />;
}
