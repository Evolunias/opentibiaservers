import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-neprenia-forum');
}

export default function ActiveNepreniaForumKeywordPage() {
  return <StaticKeywordPage slug="active-neprenia-forum" />;
}
