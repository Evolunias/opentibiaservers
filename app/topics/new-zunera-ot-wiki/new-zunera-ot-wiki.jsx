import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-zunera-ot-wiki');
}

export default function NewZuneraOtWikiKeywordPage() {
  return <StaticKeywordPage slug="new-zunera-ot-wiki" />;
}
