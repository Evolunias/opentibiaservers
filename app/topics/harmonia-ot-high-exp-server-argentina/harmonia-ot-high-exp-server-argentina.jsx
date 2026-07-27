import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-high-exp-server-argentina');
}

export default function HarmoniaOtHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-high-exp-server-argentina" />;
}
