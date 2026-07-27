import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-eldera-forum');
}

export default function LowrateElderaForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-eldera-forum" />;
}
