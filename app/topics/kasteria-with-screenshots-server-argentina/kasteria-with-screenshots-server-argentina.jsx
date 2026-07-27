import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-screenshots-server-argentina');
}

export default function KasteriaWithScreenshotsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-screenshots-server-argentina" />;
}
