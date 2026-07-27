import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-low-exp-server-north-america');
}

export default function HarmoniaOtLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-low-exp-server-north-america" />;
}
