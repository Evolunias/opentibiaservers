import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-screenshots-server-north-america');
}

export default function RealestaWithScreenshotsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-screenshots-server-north-america" />;
}
