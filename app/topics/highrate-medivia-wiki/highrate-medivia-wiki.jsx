import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-medivia-wiki');
}

export default function HighrateMediviaWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-medivia-wiki" />;
}
