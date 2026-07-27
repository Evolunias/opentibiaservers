import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-8-0-high-exp-server');
}

export default function HarmoniaOt80HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-8-0-high-exp-server" />;
}
