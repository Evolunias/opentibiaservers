import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-low-exp-server-brazil');
}

export default function HarmoniaOtLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-low-exp-server-brazil" />;
}
