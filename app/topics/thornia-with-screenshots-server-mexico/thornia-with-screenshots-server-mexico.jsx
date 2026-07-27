import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-screenshots-server-mexico');
}

export default function ThorniaWithScreenshotsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-screenshots-server-mexico" />;
}
