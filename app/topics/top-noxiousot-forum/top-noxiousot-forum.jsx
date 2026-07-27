import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-noxiousot-forum');
}

export default function TopNoxiousotForumKeywordPage() {
  return <StaticKeywordPage slug="top-noxiousot-forum" />;
}
