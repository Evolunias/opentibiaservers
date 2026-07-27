import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-harmonia-ot-wiki');
}

export default function CustomHarmoniaOtWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-harmonia-ot-wiki" />;
}
