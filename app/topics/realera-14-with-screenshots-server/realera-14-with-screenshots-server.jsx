import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-14-with-screenshots-server');
}

export default function Realera14WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="realera-14-with-screenshots-server" />;
}
