import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-forum');
}

export default function RuthlessChaosForumKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-forum" />;
}
