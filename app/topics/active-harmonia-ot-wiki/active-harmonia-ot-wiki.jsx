import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-harmonia-ot-wiki');
}

export default function ActiveHarmoniaOtWikiKeywordPage() {
  return <StaticKeywordPage slug="active-harmonia-ot-wiki" />;
}
