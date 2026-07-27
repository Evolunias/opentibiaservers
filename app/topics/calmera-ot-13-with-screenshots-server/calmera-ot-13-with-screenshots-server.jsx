import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-13-with-screenshots-server');
}

export default function CalmeraOt13WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-13-with-screenshots-server" />;
}
