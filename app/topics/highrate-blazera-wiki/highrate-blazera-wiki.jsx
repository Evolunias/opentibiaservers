import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-blazera-wiki');
}

export default function HighrateBlazeraWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-blazera-wiki" />;
}
