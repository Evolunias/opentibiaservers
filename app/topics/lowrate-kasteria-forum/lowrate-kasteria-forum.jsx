import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-kasteria-forum');
}

export default function LowrateKasteriaForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-kasteria-forum" />;
}
