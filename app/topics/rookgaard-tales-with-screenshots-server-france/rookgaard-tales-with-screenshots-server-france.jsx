import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-with-screenshots-server-france');
}

export default function RookgaardTalesWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-with-screenshots-server-france" />;
}
