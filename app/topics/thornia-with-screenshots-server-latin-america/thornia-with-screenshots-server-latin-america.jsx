import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-screenshots-server-latin-america');
}

export default function ThorniaWithScreenshotsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-screenshots-server-latin-america" />;
}
