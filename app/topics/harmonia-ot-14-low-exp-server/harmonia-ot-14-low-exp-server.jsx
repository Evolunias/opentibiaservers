import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-14-low-exp-server');
}

export default function HarmoniaOt14LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-14-low-exp-server" />;
}
