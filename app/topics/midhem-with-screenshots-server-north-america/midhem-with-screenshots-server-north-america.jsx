import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-screenshots-server-north-america');
}

export default function MidhemWithScreenshotsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-screenshots-server-north-america" />;
}
