import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-midhem-wiki');
}

export default function ActiveMidhemWikiKeywordPage() {
  return <StaticKeywordPage slug="active-midhem-wiki" />;
}
