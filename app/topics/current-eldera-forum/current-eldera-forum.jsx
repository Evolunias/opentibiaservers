import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-eldera-forum');
}

export default function CurrentElderaForumKeywordPage() {
  return <StaticKeywordPage slug="current-eldera-forum" />;
}
