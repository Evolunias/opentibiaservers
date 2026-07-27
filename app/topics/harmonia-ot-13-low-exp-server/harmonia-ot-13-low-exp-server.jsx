import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-13-low-exp-server');
}

export default function HarmoniaOt13LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-13-low-exp-server" />;
}
