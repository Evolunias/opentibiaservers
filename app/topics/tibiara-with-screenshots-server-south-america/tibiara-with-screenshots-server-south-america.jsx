import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-screenshots-server-south-america');
}

export default function TibiaraWithScreenshotsServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-screenshots-server-south-america" />;
}
