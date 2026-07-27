import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-calmera-ot-servers');
}

export default function EvoCalmeraOtServersKeywordPage() {
  return <StaticKeywordPage slug="evo-calmera-ot-servers" />;
}
