import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-zunera-ot-wiki');
}

export default function LowrateZuneraOtWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-zunera-ot-wiki" />;
}
