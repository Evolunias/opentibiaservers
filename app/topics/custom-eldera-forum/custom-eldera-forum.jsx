import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-eldera-forum');
}

export default function CustomElderaForumKeywordPage() {
  return <StaticKeywordPage slug="custom-eldera-forum" />;
}
