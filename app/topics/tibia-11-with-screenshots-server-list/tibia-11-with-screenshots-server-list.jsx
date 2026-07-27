import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-screenshots-server-list');
}

export default function Tibia11WithScreenshotsServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-screenshots-server-list" />;
}
