import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-11-with-screenshots-server');
}

export default function CalmeraOt11WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-11-with-screenshots-server" />;
}
