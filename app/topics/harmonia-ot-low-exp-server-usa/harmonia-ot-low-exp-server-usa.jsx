import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-low-exp-server-usa');
}

export default function HarmoniaOtLowExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-low-exp-server-usa" />;
}
