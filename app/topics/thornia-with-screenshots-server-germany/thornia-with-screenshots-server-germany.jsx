import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-screenshots-server-germany');
}

export default function ThorniaWithScreenshotsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-screenshots-server-germany" />;
}
