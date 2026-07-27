import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-1-with-screenshots-server');
}

export default function Tibiame81WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-1-with-screenshots-server" />;
}
