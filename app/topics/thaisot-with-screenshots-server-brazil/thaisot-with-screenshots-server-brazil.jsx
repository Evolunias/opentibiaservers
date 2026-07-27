import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-screenshots-server-brazil');
}

export default function ThaisotWithScreenshotsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-screenshots-server-brazil" />;
}
