import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-low-exp-server-mexico');
}

export default function HarmoniaOtLowExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-low-exp-server-mexico" />;
}
