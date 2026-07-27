import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-1-with-screenshots-server');
}

export default function Realera71WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="realera-7-1-with-screenshots-server" />;
}
