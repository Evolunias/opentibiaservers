import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-screenshots-server-usa');
}

export default function ThorniaWithScreenshotsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-screenshots-server-usa" />;
}
