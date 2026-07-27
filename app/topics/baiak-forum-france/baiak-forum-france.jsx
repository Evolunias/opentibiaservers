import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-forum-france');
}

export default function BaiakForumFranceKeywordPage() {
  return <StaticKeywordPage slug="baiak-forum-france" />;
}
