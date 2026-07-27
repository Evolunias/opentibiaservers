import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-screenshots-server-list');
}

export default function Tibia15WithScreenshotsServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-screenshots-server-list" />;
}
