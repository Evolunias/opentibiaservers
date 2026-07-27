import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-low-exp-server-poland');
}

export default function HarmoniaOtLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-low-exp-server-poland" />;
}
