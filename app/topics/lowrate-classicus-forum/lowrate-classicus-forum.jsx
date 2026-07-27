import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-classicus-forum');
}

export default function LowrateClassicusForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-classicus-forum" />;
}
