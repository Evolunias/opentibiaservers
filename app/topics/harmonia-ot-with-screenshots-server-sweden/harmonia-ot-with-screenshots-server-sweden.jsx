import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-with-screenshots-server-sweden');
}

export default function HarmoniaOtWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-with-screenshots-server-sweden" />;
}
