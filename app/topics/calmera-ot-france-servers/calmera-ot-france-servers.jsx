import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-france-servers');
}

export default function CalmeraOtFranceServersKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-france-servers" />;
}
