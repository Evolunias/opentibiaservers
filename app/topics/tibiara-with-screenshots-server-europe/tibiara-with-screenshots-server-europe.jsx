import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-screenshots-server-europe');
}

export default function TibiaraWithScreenshotsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-screenshots-server-europe" />;
}
