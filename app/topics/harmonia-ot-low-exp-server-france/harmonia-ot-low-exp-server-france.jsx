import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-low-exp-server-france');
}

export default function HarmoniaOtLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-low-exp-server-france" />;
}
