import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-screenshots-server-argentina');
}

export default function OlderaWithScreenshotsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-screenshots-server-argentina" />;
}
