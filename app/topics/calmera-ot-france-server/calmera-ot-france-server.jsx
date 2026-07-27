import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-france-server');
}

export default function CalmeraOtFranceServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-france-server" />;
}
