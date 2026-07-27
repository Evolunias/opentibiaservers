import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-screenshots-server-france');
}

export default function CarlinotWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-screenshots-server-france" />;
}
