import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-forum');
}

export default function ArchlightForumKeywordPage() {
  return <StaticKeywordPage slug="archlight-forum" />;
}
