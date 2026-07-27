import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-8-0-low-exp-server');
}

export default function HarmoniaOt80LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-8-0-low-exp-server" />;
}
