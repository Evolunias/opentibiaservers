import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-calmera-ot-wiki');
}

export default function OldSchoolCalmeraOtWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-calmera-ot-wiki" />;
}
