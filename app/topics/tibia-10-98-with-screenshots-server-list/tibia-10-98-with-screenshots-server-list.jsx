import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-with-screenshots-server-list');
}

export default function Tibia1098WithScreenshotsServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-with-screenshots-server-list" />;
}
