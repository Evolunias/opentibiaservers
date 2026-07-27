import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ruthless-chaos-forum');
}

export default function TopRuthlessChaosForumKeywordPage() {
  return <StaticKeywordPage slug="top-ruthless-chaos-forum" />;
}
