import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-11-high-exp-server');
}

export default function HarmoniaOt11HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-11-high-exp-server" />;
}
