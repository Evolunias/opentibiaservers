import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-thornia-forum');
}

export default function LowrateThorniaForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-thornia-forum" />;
}
