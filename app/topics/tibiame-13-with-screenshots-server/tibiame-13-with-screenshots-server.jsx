import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-13-with-screenshots-server');
}

export default function Tibiame13WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-13-with-screenshots-server" />;
}
