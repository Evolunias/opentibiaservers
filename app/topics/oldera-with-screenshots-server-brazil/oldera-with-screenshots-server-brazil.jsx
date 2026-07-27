import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-screenshots-server-brazil');
}

export default function OlderaWithScreenshotsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-screenshots-server-brazil" />;
}
