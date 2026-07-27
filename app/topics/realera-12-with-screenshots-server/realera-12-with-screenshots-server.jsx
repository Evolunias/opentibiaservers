import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-12-with-screenshots-server');
}

export default function Realera12WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="realera-12-with-screenshots-server" />;
}
