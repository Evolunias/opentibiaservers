import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-9-6-with-screenshots-server');
}

export default function Tibiame96WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-9-6-with-screenshots-server" />;
}
