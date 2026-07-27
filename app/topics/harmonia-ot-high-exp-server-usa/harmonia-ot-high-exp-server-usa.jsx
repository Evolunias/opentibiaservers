import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-high-exp-server-usa');
}

export default function HarmoniaOtHighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-high-exp-server-usa" />;
}
