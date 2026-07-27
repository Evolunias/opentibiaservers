import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-with-screenshots-server-list');
}

export default function Tibia96WithScreenshotsServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-with-screenshots-server-list" />;
}
