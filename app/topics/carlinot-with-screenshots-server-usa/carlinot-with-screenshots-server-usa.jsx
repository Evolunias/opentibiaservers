import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-screenshots-server-usa');
}

export default function CarlinotWithScreenshotsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-screenshots-server-usa" />;
}
