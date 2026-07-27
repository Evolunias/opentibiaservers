import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-screenshots-server-canada');
}

export default function RealestaWithScreenshotsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-screenshots-server-canada" />;
}
