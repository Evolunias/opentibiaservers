import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-11-with-screenshots-server');
}

export default function Realera11WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="realera-11-with-screenshots-server" />;
}
