import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-screenshots-server-germany');
}

export default function ElderaWithScreenshotsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-screenshots-server-germany" />;
}
