import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-7-72-high-exp-server');
}

export default function HarmoniaOt772HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-7-72-high-exp-server" />;
}
