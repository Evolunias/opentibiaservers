import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-screenshots-server-north-america');
}

export default function OlderaWithScreenshotsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-screenshots-server-north-america" />;
}
