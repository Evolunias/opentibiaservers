import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-screenshots-server-uk');
}

export default function OlderaWithScreenshotsServerUkKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-screenshots-server-uk" />;
}
