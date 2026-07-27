import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-medivia-servers');
}

export default function EvoMediviaServersKeywordPage() {
  return <StaticKeywordPage slug="evo-medivia-servers" />;
}
