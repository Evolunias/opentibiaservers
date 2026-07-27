import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-screenshots-forum');
}

export default function Tibia13WithScreenshotsForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-screenshots-forum" />;
}
