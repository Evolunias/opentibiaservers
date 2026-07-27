import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-with-screenshots-forum');
}

export default function Tibia772WithScreenshotsForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-with-screenshots-forum" />;
}
