import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ruthless-chaos-forum');
}

export default function NewSeasonRuthlessChaosForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-ruthless-chaos-forum" />;
}
