import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-non-pvp-server-mexico');
}

export default function CalmeraOtNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-non-pvp-server-mexico" />;
}
