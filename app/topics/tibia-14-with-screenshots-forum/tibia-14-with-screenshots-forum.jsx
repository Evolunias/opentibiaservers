import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-screenshots-forum');
}

export default function Tibia14WithScreenshotsForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-screenshots-forum" />;
}
