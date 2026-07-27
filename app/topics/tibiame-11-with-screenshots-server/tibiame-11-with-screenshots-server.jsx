import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-11-with-screenshots-server');
}

export default function Tibiame11WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-11-with-screenshots-server" />;
}
