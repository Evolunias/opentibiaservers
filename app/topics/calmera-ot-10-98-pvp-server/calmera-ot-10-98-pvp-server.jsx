import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-10-98-pvp-server');
}

export default function CalmeraOt1098PvpServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-10-98-pvp-server" />;
}
