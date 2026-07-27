import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-12-with-screenshots-server');
}

export default function CalmeraOt12WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-12-with-screenshots-server" />;
}
