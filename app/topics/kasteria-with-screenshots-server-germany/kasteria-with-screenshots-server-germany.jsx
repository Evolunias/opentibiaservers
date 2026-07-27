import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-screenshots-server-germany');
}

export default function KasteriaWithScreenshotsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-screenshots-server-germany" />;
}
