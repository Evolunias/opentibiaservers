import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-screenshots-server-france');
}

export default function TibiameWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-screenshots-server-france" />;
}
