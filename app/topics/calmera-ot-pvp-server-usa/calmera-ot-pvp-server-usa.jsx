import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-pvp-server-usa');
}

export default function CalmeraOtPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-pvp-server-usa" />;
}
