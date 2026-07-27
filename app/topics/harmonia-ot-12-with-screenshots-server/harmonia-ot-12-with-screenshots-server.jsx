import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-12-with-screenshots-server');
}

export default function HarmoniaOt12WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-12-with-screenshots-server" />;
}
