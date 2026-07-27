import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ruthless-chaos-forum');
}

export default function CustomRuthlessChaosForumKeywordPage() {
  return <StaticKeywordPage slug="custom-ruthless-chaos-forum" />;
}
