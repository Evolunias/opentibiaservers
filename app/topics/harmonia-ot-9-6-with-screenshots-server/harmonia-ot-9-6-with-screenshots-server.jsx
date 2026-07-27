import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-9-6-with-screenshots-server');
}

export default function HarmoniaOt96WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-9-6-with-screenshots-server" />;
}
