import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-screenshots-server-uk');
}

export default function TibiaraWithScreenshotsServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-screenshots-server-uk" />;
}
