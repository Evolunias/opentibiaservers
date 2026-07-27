import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-arcaniarl-forum');
}

export default function CustomArcaniarlForumKeywordPage() {
  return <StaticKeywordPage slug="custom-arcaniarl-forum" />;
}
