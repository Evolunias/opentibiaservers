import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-otmadness-wiki');
}

export default function OldSchoolOtmadnessWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-otmadness-wiki" />;
}
