import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-10-98-non-pvp-server');
}

export default function CalmeraOt1098NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-10-98-non-pvp-server" />;
}
