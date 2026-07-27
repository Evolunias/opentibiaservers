import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-8-1-with-screenshots-server');
}

export default function Realera81WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="realera-8-1-with-screenshots-server" />;
}
