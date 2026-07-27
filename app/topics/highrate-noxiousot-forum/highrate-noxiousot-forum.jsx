import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-noxiousot-forum');
}

export default function HighrateNoxiousotForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-noxiousot-forum" />;
}
