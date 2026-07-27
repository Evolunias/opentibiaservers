import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-zunera-ot-server');
}

export default function PvpZuneraOtServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-zunera-ot-server" />;
}
