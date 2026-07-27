import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-screenshots-server-usa');
}

export default function RealestaWithScreenshotsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-screenshots-server-usa" />;
}
