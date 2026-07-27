import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-screenshots-server-france');
}

export default function ThaisotWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-screenshots-server-france" />;
}
