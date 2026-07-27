import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-noxiousot-forum');
}

export default function FreshStartNoxiousotForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-noxiousot-forum" />;
}
