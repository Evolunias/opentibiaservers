import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-zunera-ot-server');
}

export default function EvoZuneraOtServerKeywordPage() {
  return <StaticKeywordPage slug="evo-zunera-ot-server" />;
}
