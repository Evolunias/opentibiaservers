import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-screenshots-server-brazil');
}

export default function ThorniaWithScreenshotsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-screenshots-server-brazil" />;
}
