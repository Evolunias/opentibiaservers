import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-7-6-pvp-server');
}

export default function CalmeraOt76PvpServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-7-6-pvp-server" />;
}
