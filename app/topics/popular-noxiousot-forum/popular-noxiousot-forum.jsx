import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-noxiousot-forum');
}

export default function PopularNoxiousotForumKeywordPage() {
  return <StaticKeywordPage slug="popular-noxiousot-forum" />;
}
