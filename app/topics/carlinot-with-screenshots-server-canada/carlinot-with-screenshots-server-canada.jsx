import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-screenshots-server-canada');
}

export default function CarlinotWithScreenshotsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-screenshots-server-canada" />;
}
