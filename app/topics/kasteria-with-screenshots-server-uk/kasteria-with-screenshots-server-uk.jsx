import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-screenshots-server-uk');
}

export default function KasteriaWithScreenshotsServerUkKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-screenshots-server-uk" />;
}
