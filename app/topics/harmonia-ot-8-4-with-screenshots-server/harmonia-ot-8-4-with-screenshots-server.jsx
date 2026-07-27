import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-8-4-with-screenshots-server');
}

export default function HarmoniaOt84WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-8-4-with-screenshots-server" />;
}
