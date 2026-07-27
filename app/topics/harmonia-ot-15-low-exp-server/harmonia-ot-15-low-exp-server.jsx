import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-15-low-exp-server');
}

export default function HarmoniaOt15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-15-low-exp-server" />;
}
