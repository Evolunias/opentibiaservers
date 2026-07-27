import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-0-with-screenshots-server');
}

export default function Tibiara80WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-0-with-screenshots-server" />;
}
