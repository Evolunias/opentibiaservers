import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-with-screenshots-server-latin-america');
}

export default function HarmoniaOtWithScreenshotsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-with-screenshots-server-latin-america" />;
}
