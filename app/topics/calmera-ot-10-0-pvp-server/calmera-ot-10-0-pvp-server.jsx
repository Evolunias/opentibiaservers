import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-10-0-pvp-server');
}

export default function CalmeraOt100PvpServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-10-0-pvp-server" />;
}
