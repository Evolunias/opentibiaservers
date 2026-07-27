import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-eldera-wiki');
}

export default function OldSchoolElderaWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-eldera-wiki" />;
}
