import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ruthless-chaos-forum');
}

export default function LowrateRuthlessChaosForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ruthless-chaos-forum" />;
}
