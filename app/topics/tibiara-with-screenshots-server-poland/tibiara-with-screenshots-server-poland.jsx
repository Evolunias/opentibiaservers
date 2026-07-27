import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-screenshots-server-poland');
}

export default function TibiaraWithScreenshotsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-screenshots-server-poland" />;
}
