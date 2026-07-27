import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-with-screenshots-server-france');
}

export default function CalmeraOtWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-with-screenshots-server-france" />;
}
