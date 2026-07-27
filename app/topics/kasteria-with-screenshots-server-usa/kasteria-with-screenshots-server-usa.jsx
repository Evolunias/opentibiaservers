import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-screenshots-server-usa');
}

export default function KasteriaWithScreenshotsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-screenshots-server-usa" />;
}
