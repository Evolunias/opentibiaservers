import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-screenshots-server-usa');
}

export default function TibiaraWithScreenshotsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-screenshots-server-usa" />;
}
