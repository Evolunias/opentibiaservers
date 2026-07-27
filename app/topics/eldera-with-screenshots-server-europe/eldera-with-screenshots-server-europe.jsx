import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-screenshots-server-europe');
}

export default function ElderaWithScreenshotsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-screenshots-server-europe" />;
}
