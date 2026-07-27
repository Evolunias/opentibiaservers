import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-15-with-screenshots-server');
}

export default function Tibiame15WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-15-with-screenshots-server" />;
}
