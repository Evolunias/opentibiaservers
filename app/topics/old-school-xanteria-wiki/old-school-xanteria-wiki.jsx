import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-xanteria-wiki');
}

export default function OldSchoolXanteriaWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-xanteria-wiki" />;
}
