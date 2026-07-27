import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-screenshots-server-uk');
}

export default function CarlinotWithScreenshotsServerUkKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-screenshots-server-uk" />;
}
