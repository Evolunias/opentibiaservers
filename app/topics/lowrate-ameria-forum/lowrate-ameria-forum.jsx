import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ameria-forum');
}

export default function LowrateAmeriaForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ameria-forum" />;
}
