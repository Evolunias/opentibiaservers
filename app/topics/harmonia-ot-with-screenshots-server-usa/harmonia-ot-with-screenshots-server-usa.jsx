import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-with-screenshots-server-usa');
}

export default function HarmoniaOtWithScreenshotsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-with-screenshots-server-usa" />;
}
