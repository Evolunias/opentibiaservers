import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-screenshots-server-europe');
}

export default function KasteriaWithScreenshotsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-screenshots-server-europe" />;
}
