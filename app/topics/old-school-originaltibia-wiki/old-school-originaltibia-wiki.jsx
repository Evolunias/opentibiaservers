import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-originaltibia-wiki');
}

export default function OldSchoolOriginaltibiaWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-originaltibia-wiki" />;
}
