import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-7-4-high-exp-server');
}

export default function HarmoniaOt74HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-7-4-high-exp-server" />;
}
