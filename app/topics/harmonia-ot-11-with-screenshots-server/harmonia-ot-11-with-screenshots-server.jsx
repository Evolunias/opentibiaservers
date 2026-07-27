import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-11-with-screenshots-server');
}

export default function HarmoniaOt11WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-11-with-screenshots-server" />;
}
