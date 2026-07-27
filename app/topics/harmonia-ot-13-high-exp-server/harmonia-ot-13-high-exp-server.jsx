import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-13-high-exp-server');
}

export default function HarmoniaOt13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-13-high-exp-server" />;
}
