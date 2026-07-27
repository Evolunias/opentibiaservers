import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-noxiousot-forum');
}

export default function BestNoxiousotForumKeywordPage() {
  return <StaticKeywordPage slug="best-noxiousot-forum" />;
}
