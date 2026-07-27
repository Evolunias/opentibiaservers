import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-high-exp-server-poland');
}

export default function HarmoniaOtHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-high-exp-server-poland" />;
}
