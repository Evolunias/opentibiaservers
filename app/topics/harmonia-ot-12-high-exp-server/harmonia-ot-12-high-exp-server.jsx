import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-12-high-exp-server');
}

export default function HarmoniaOt12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-12-high-exp-server" />;
}
