import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-neprenia-wiki');
}

export default function OldSchoolNepreniaWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-neprenia-wiki" />;
}
