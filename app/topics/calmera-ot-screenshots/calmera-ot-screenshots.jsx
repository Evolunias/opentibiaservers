import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-screenshots');
}

export default function CalmeraOtScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-screenshots" />;
}
