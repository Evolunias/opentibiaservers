import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-zunera-ot-servers');
}

export default function EvoZuneraOtServersKeywordPage() {
  return <StaticKeywordPage slug="evo-zunera-ot-servers" />;
}
