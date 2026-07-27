import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-screenshots-server-north-america');
}

export default function RealeraWithScreenshotsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-with-screenshots-server-north-america" />;
}
