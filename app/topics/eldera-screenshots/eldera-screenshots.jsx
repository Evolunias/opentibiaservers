import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-screenshots');
}

export default function ElderaScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="eldera-screenshots" />;
}
