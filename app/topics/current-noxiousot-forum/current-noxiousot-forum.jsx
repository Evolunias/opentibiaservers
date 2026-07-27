import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-noxiousot-forum');
}

export default function CurrentNoxiousotForumKeywordPage() {
  return <StaticKeywordPage slug="current-noxiousot-forum" />;
}
