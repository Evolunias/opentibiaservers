import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-midhem-wiki');
}

export default function HighrateMidhemWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-midhem-wiki" />;
}
