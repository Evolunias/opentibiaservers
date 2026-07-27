import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-fresh-start-server-latin-america');
}

export default function HarmoniaOtFreshStartServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-fresh-start-server-latin-america" />;
}
