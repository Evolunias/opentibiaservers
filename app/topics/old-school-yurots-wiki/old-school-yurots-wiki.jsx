import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-yurots-wiki');
}

export default function OldSchoolYurotsWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-yurots-wiki" />;
}
