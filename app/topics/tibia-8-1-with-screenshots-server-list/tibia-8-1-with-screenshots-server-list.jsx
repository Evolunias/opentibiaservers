import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-with-screenshots-server-list');
}

export default function Tibia81WithScreenshotsServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-with-screenshots-server-list" />;
}
