import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-13-with-screenshots-server');
}

export default function Realera13WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="realera-13-with-screenshots-server" />;
}
