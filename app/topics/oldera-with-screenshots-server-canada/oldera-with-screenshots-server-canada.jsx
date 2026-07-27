import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-screenshots-server-canada');
}

export default function OlderaWithScreenshotsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-screenshots-server-canada" />;
}
