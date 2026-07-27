import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-zunera-ot-wiki');
}

export default function CustomZuneraOtWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-zunera-ot-wiki" />;
}
