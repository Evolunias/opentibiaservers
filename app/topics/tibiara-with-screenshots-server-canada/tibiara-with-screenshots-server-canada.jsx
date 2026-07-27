import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-screenshots-server-canada');
}

export default function TibiaraWithScreenshotsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-screenshots-server-canada" />;
}
