import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-screenshots-server-germany');
}

export default function RealestaWithScreenshotsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-screenshots-server-germany" />;
}
