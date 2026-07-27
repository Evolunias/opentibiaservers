import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-screenshots-server-poland');
}

export default function CarlinotWithScreenshotsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-screenshots-server-poland" />;
}
