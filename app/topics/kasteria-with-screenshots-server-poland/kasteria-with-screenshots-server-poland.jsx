import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-screenshots-server-poland');
}

export default function KasteriaWithScreenshotsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-screenshots-server-poland" />;
}
