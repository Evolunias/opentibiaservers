import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-screenshots-server-mexico');
}

export default function RealestaWithScreenshotsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-screenshots-server-mexico" />;
}
