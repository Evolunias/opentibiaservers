import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-screenshots-server-canada');
}

export default function TibiameWithScreenshotsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-screenshots-server-canada" />;
}
