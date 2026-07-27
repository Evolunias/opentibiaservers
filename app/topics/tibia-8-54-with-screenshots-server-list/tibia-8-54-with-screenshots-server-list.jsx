import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-with-screenshots-server-list');
}

export default function Tibia854WithScreenshotsServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-with-screenshots-server-list" />;
}
