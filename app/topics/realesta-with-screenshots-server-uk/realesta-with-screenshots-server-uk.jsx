import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-screenshots-server-uk');
}

export default function RealestaWithScreenshotsServerUkKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-screenshots-server-uk" />;
}
