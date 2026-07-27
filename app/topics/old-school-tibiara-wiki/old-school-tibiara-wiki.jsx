import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiara-wiki');
}

export default function OldSchoolTibiaraWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiara-wiki" />;
}
