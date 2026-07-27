import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-screenshots-server-poland');
}

export default function ThorniaWithScreenshotsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-screenshots-server-poland" />;
}
