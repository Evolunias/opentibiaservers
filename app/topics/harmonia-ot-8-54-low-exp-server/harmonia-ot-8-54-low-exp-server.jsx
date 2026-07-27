import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-8-54-low-exp-server');
}

export default function HarmoniaOt854LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-8-54-low-exp-server" />;
}
