import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-7-1-with-screenshots-server');
}

export default function HarmoniaOt71WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-7-1-with-screenshots-server" />;
}
