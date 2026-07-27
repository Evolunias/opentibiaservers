import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-baiak-ilusion-wiki');
}

export default function OldSchoolBaiakIlusionWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-baiak-ilusion-wiki" />;
}
