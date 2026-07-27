import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-14-with-screenshots-server');
}

export default function Tibiame14WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-14-with-screenshots-server" />;
}
