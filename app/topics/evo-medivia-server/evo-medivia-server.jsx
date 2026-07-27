import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-medivia-server');
}

export default function EvoMediviaServerKeywordPage() {
  return <StaticKeywordPage slug="evo-medivia-server" />;
}
