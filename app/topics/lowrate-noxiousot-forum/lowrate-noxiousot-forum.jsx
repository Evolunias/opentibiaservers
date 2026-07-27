import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-noxiousot-forum');
}

export default function LowrateNoxiousotForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-noxiousot-forum" />;
}
