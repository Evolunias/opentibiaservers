import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-screenshots-server-europe');
}

export default function OlderaWithScreenshotsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-screenshots-server-europe" />;
}
