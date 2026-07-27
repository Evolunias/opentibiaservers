import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ruthless-chaos-forum');
}

export default function CurrentRuthlessChaosForumKeywordPage() {
  return <StaticKeywordPage slug="current-ruthless-chaos-forum" />;
}
