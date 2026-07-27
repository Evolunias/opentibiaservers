import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-screenshots-server-north-america');
}

export default function TibiaraWithScreenshotsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-screenshots-server-north-america" />;
}
