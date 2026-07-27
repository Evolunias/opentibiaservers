import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-9-6-pvp-server');
}

export default function CalmeraOt96PvpServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-9-6-pvp-server" />;
}
