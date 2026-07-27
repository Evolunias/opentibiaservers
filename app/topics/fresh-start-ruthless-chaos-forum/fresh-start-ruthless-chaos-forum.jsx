import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ruthless-chaos-forum');
}

export default function FreshStartRuthlessChaosForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ruthless-chaos-forum" />;
}
