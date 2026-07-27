import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-high-exp-server-brazil');
}

export default function HarmoniaOtHighExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-high-exp-server-brazil" />;
}
