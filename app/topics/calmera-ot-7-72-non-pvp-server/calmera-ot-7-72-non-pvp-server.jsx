import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-7-72-non-pvp-server');
}

export default function CalmeraOt772NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-7-72-non-pvp-server" />;
}
