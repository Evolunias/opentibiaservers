import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-with-screenshots-server-poland');
}

export default function HarmoniaOtWithScreenshotsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-with-screenshots-server-poland" />;
}
