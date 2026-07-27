import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-10-0-with-screenshots-server');
}

export default function CalmeraOt100WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-10-0-with-screenshots-server" />;
}
