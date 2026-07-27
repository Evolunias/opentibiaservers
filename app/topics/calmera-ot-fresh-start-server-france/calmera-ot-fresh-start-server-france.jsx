import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-fresh-start-server-france');
}

export default function CalmeraOtFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-fresh-start-server-france" />;
}
