import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-screenshots-server-germany');
}

export default function CarlinotWithScreenshotsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-screenshots-server-germany" />;
}
