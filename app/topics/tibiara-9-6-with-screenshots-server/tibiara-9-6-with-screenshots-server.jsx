import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-9-6-with-screenshots-server');
}

export default function Tibiara96WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-9-6-with-screenshots-server" />;
}
