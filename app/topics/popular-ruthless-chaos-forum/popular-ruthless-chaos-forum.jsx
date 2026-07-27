import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ruthless-chaos-forum');
}

export default function PopularRuthlessChaosForumKeywordPage() {
  return <StaticKeywordPage slug="popular-ruthless-chaos-forum" />;
}
