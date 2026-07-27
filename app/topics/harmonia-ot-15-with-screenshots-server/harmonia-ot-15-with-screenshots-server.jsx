import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-15-with-screenshots-server');
}

export default function HarmoniaOt15WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-15-with-screenshots-server" />;
}
