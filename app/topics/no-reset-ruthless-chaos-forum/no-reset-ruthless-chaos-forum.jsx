import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ruthless-chaos-forum');
}

export default function NoResetRuthlessChaosForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ruthless-chaos-forum" />;
}
