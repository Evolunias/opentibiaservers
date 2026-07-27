import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-high-exp-server-latin-america');
}

export default function HarmoniaOtHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-high-exp-server-latin-america" />;
}
