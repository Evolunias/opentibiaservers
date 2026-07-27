import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-harmonia-ot-wiki');
}

export default function NewHarmoniaOtWikiKeywordPage() {
  return <StaticKeywordPage slug="new-harmonia-ot-wiki" />;
}
