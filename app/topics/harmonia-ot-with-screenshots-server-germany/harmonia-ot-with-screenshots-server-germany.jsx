import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-with-screenshots-server-germany');
}

export default function HarmoniaOtWithScreenshotsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-with-screenshots-server-germany" />;
}
