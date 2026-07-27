import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-screenshots-server-mexico');
}

export default function TibiameWithScreenshotsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-screenshots-server-mexico" />;
}
