import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-harmonia-ot-wiki');
}

export default function OfficialHarmoniaOtWikiKeywordPage() {
  return <StaticKeywordPage slug="official-harmonia-ot-wiki" />;
}
