import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-neprenia-forum');
}

export default function NewNepreniaForumKeywordPage() {
  return <StaticKeywordPage slug="new-neprenia-forum" />;
}
