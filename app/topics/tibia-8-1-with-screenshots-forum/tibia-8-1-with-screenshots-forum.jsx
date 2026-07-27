import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-with-screenshots-forum');
}

export default function Tibia81WithScreenshotsForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-with-screenshots-forum" />;
}
