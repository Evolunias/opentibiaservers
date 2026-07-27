import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-10-0-low-exp-server');
}

export default function HarmoniaOt100LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-10-0-low-exp-server" />;
}
