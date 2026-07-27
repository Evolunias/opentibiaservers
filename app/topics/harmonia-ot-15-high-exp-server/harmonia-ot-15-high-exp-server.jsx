import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-15-high-exp-server');
}

export default function HarmoniaOt15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-15-high-exp-server" />;
}
