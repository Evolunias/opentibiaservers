import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-oxygenot-wiki');
}

export default function OldSchoolOxygenotWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-oxygenot-wiki" />;
}
