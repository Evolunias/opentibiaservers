import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nostalther-wiki');
}

export default function OldSchoolNostaltherWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-nostalther-wiki" />;
}
