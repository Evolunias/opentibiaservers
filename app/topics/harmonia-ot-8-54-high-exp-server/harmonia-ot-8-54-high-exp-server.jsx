import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-8-54-high-exp-server');
}

export default function HarmoniaOt854HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-8-54-high-exp-server" />;
}
