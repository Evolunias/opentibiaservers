import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nilot-wiki');
}

export default function OldSchoolNilotWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-nilot-wiki" />;
}
