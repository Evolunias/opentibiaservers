import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-screenshots');
}

export default function HarmoniaOtScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-screenshots" />;
}
