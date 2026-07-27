import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-with-screenshots-server-brazil');
}

export default function HarmoniaOtWithScreenshotsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-with-screenshots-server-brazil" />;
}
