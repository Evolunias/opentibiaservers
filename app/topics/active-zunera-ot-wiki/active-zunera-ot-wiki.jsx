import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-zunera-ot-wiki');
}

export default function ActiveZuneraOtWikiKeywordPage() {
  return <StaticKeywordPage slug="active-zunera-ot-wiki" />;
}
