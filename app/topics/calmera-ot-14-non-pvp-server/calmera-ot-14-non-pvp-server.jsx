import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-14-non-pvp-server');
}

export default function CalmeraOt14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-14-non-pvp-server" />;
}
