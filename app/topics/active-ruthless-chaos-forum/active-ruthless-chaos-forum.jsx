import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ruthless-chaos-forum');
}

export default function ActiveRuthlessChaosForumKeywordPage() {
  return <StaticKeywordPage slug="active-ruthless-chaos-forum" />;
}
