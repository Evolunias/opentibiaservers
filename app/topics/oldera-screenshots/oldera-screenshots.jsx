import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-screenshots');
}

export default function OlderaScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="oldera-screenshots" />;
}
