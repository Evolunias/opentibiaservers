import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-with-screenshots-forum');
}

export default function Tibia86WithScreenshotsForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-with-screenshots-forum" />;
}
