import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-with-screenshots-server-france');
}

export default function HarmoniaOtWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-with-screenshots-server-france" />;
}
