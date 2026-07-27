import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-midhem-wiki');
}

export default function OldSchoolMidhemWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-midhem-wiki" />;
}
