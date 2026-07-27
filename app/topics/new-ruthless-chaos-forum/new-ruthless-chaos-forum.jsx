import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ruthless-chaos-forum');
}

export default function NewRuthlessChaosForumKeywordPage() {
  return <StaticKeywordPage slug="new-ruthless-chaos-forum" />;
}
