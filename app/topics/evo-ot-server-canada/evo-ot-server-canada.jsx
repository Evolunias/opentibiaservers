import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-ot-server-canada');
}

export default function EvoOtServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="evo-ot-server-canada" />;
}
