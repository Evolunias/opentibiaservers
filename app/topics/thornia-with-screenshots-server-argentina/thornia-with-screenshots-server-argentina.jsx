import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-screenshots-server-argentina');
}

export default function ThorniaWithScreenshotsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-screenshots-server-argentina" />;
}
