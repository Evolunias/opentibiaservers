import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-high-exp-server-uk');
}

export default function HarmoniaOtHighExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-high-exp-server-uk" />;
}
