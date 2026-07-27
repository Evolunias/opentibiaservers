import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-screenshots-server-north-america');
}

export default function KasteriaWithScreenshotsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-screenshots-server-north-america" />;
}
