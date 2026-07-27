import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-screenshots-server-europe');
}

export default function ThorniaWithScreenshotsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-screenshots-server-europe" />;
}
