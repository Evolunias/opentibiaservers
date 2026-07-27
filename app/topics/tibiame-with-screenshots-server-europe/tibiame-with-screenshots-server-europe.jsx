import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-screenshots-server-europe');
}

export default function TibiameWithScreenshotsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-screenshots-server-europe" />;
}
