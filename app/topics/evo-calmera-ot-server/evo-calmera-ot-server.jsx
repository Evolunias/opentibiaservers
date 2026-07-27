import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-calmera-ot-server');
}

export default function EvoCalmeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="evo-calmera-ot-server" />;
}
