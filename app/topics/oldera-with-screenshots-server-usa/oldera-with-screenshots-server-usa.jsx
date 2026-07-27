import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-screenshots-server-usa');
}

export default function OlderaWithScreenshotsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-screenshots-server-usa" />;
}
