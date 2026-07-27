import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-10-0-with-screenshots-server');
}

export default function Tibiara100WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-10-0-with-screenshots-server" />;
}
