import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-screenshots-server-germany');
}

export default function OlderaWithScreenshotsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-screenshots-server-germany" />;
}
