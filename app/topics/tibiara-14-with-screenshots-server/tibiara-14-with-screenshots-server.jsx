import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-14-with-screenshots-server');
}

export default function Tibiara14WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-14-with-screenshots-server" />;
}
