import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-7-72-with-screenshots-server');
}

export default function Tibiame772WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-7-72-with-screenshots-server" />;
}
