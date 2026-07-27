import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('renera-wiki');
}

export default function ReneraWikiKeywordPage() {
  return <StaticKeywordPage slug="renera-wiki" />;
}
