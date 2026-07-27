import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-high-exp-server-europe');
}

export default function HarmoniaOtHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-high-exp-server-europe" />;
}
