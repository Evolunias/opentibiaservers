import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-serenity-forum');
}

export default function RealMapSerenityForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-serenity-forum" />;
}
