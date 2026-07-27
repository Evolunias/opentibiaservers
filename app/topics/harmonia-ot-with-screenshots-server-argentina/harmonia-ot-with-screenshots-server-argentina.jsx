import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-with-screenshots-server-argentina');
}

export default function HarmoniaOtWithScreenshotsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-with-screenshots-server-argentina" />;
}
