import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-low-exp-server-uk');
}

export default function HarmoniaOtLowExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-low-exp-server-uk" />;
}
