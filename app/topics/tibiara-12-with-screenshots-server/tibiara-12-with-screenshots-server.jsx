import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-12-with-screenshots-server');
}

export default function Tibiara12WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-12-with-screenshots-server" />;
}
