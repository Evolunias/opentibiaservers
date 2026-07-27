import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-neprenia-forum');
}

export default function CustomNepreniaForumKeywordPage() {
  return <StaticKeywordPage slug="custom-neprenia-forum" />;
}
