import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-low-exp-server-latin-america');
}

export default function HarmoniaOtLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-low-exp-server-latin-america" />;
}
