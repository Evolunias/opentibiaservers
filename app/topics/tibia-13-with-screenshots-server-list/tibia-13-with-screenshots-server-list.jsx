import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-screenshots-server-list');
}

export default function Tibia13WithScreenshotsServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-screenshots-server-list" />;
}
