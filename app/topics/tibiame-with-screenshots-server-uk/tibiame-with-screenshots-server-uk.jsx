import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-screenshots-server-uk');
}

export default function TibiameWithScreenshotsServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-screenshots-server-uk" />;
}
