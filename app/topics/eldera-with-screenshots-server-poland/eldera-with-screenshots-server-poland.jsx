import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-screenshots-server-poland');
}

export default function ElderaWithScreenshotsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-screenshots-server-poland" />;
}
