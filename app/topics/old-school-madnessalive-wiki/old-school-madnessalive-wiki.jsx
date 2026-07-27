import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-madnessalive-wiki');
}

export default function OldSchoolMadnessaliveWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-madnessalive-wiki" />;
}
