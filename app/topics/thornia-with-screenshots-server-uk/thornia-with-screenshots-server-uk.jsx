import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-screenshots-server-uk');
}

export default function ThorniaWithScreenshotsServerUkKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-screenshots-server-uk" />;
}
