import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-screenshots-server-mexico');
}

export default function KasteriaWithScreenshotsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-screenshots-server-mexico" />;
}
