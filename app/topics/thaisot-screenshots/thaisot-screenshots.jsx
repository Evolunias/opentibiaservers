import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-screenshots');
}

export default function ThaisotScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="thaisot-screenshots" />;
}
