import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-15-with-screenshots-server');
}

export default function Tibiara15WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-15-with-screenshots-server" />;
}
