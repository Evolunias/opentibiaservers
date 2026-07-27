import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-8-4-with-screenshots-server');
}

export default function Realera84WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="realera-8-4-with-screenshots-server" />;
}
