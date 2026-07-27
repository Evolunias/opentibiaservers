import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-4-with-screenshots-server');
}

export default function Tibiame84WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-4-with-screenshots-server" />;
}
