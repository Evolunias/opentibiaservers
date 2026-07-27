import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-high-exp-server-mexico');
}

export default function HarmoniaOtHighExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-high-exp-server-mexico" />;
}
