import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-eternal-odyssey-wiki');
}

export default function OldSchoolEternalOdysseyWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-eternal-odyssey-wiki" />;
}
