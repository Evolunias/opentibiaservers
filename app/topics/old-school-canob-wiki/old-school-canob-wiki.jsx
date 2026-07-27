import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-canob-wiki');
}

export default function OldSchoolCanobWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-canob-wiki" />;
}
