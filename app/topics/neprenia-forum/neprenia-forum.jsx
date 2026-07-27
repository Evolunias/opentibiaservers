import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-forum');
}

export default function NepreniaForumKeywordPage() {
  return <StaticKeywordPage slug="neprenia-forum" />;
}
