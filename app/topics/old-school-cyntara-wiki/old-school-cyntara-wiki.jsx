import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-cyntara-wiki');
}

export default function OldSchoolCyntaraWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-cyntara-wiki" />;
}
