import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-7-4-with-screenshots-server');
}

export default function Tibiara74WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-7-4-with-screenshots-server" />;
}
