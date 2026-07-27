import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-zunera-ot-wiki');
}

export default function CurrentZuneraOtWikiKeywordPage() {
  return <StaticKeywordPage slug="current-zunera-ot-wiki" />;
}
