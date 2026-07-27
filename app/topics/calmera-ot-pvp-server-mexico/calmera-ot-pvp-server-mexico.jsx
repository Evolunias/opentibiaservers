import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-pvp-server-mexico');
}

export default function CalmeraOtPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-pvp-server-mexico" />;
}
