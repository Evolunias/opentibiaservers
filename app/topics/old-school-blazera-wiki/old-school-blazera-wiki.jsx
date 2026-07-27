import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-blazera-wiki');
}

export default function OldSchoolBlazeraWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-blazera-wiki" />;
}
