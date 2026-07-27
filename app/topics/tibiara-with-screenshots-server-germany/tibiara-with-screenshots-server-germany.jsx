import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-screenshots-server-germany');
}

export default function TibiaraWithScreenshotsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-screenshots-server-germany" />;
}
