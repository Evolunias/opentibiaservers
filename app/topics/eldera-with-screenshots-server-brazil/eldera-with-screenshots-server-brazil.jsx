import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-screenshots-server-brazil');
}

export default function ElderaWithScreenshotsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-screenshots-server-brazil" />;
}
