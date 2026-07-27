import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-high-exp-server-france');
}

export default function HarmoniaOtHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-high-exp-server-france" />;
}
