import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-wiki-usa');
}

export default function OldSchoolWikiUsaKeywordPage() {
  return <StaticKeywordPage slug="old-school-wiki-usa" />;
}
