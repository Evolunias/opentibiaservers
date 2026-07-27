import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-calmera-ot-server');
}

export default function PvpCalmeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-calmera-ot-server" />;
}
