import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-screenshots-server-uk');
}

export default function ElderaWithScreenshotsServerUkKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-screenshots-server-uk" />;
}
