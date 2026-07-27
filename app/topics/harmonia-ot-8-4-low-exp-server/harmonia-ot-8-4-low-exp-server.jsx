import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-8-4-low-exp-server');
}

export default function HarmoniaOt84LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-8-4-low-exp-server" />;
}
