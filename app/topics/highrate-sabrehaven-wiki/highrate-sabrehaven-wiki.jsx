import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-sabrehaven-wiki');
}

export default function HighrateSabrehavenWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-sabrehaven-wiki" />;
}
