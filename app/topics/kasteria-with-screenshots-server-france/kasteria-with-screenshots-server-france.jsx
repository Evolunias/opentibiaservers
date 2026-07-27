import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-screenshots-server-france');
}

export default function KasteriaWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-screenshots-server-france" />;
}
