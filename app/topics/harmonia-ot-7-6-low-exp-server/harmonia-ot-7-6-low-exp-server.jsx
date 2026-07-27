import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-7-6-low-exp-server');
}

export default function HarmoniaOt76LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-7-6-low-exp-server" />;
}
