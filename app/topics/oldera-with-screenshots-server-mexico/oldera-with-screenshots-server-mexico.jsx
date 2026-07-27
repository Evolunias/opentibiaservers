import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-screenshots-server-mexico');
}

export default function OlderaWithScreenshotsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-screenshots-server-mexico" />;
}
