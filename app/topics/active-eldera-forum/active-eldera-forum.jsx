import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-eldera-forum');
}

export default function ActiveElderaForumKeywordPage() {
  return <StaticKeywordPage slug="active-eldera-forum" />;
}
