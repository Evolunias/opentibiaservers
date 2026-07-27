import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-13-with-screenshots-server');
}

export default function HarmoniaOt13WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-13-with-screenshots-server" />;
}
