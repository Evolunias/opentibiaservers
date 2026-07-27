import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-screenshots-server-list');
}

export default function Tibia12WithScreenshotsServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-screenshots-server-list" />;
}
