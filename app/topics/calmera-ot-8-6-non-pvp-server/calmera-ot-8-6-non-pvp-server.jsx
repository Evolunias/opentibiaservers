import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-8-6-non-pvp-server');
}

export default function CalmeraOt86NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-8-6-non-pvp-server" />;
}
