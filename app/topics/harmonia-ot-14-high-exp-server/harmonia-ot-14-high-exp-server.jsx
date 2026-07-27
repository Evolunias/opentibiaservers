import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-14-high-exp-server');
}

export default function HarmoniaOt14HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-14-high-exp-server" />;
}
